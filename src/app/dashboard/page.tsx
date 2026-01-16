'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
      } else {
        setUser(user);
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <div className="text-amber-400 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-light tracking-widest text-amber-400">ZENVEDA</h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-xl glass text-white text-sm hover:bg-white/10 transition-all"
          >
            Logout
          </button>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-light mb-4">Welcome back!</h2>
          {user && (
            <p className="text-gray-400 mb-4">
              Logged in as: <span className="text-amber-400">{user.email}</span>
            </p>
          )}
          <p className="text-gray-500">
            This is your dashboard. Build out your features here.
          </p>
        </div>
      </div>
    </div>
  );
}


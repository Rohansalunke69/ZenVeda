'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/Button';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    setMousePosition({ x: moveX, y: moveY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        // Redirect to login after 2 seconds
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#f3d6c6]">
      {/* Ambient Lighting Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_100%,#e0b9a2_0%,#f3d6c6_70%)] z-0" />

      {/* Banyan Tree SVG Background */}
      <div 
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1000px] z-10 transition-transform duration-200 ease-out"
        style={{ 
          transform: `translateX(calc(-50% + ${mousePosition.x}px)) translateY(${mousePosition.y}px)` 
        }}
      >
        <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Main trunk with sway animation */}
          <g className="animate-[sway_8s_ease-in-out_infinite_alternate] origin-bottom">
            <path 
              d="M360 500 C 380 450, 350 350, 400 300 S 450 150, 400 100" 
              fill="none" 
              stroke="#2d1e16" 
              strokeWidth="35" 
            />
          </g>
          
          {/* Left branch */}
          <g className="animate-[sway_6s_ease-in-out_infinite_alternate-reverse] origin-bottom">
            <path d="M385 320 Q 250 300, 150 200" fill="none" stroke="#2d1e16" strokeWidth="20" />
          </g>
          
          {/* Right branch */}
          <g className="animate-[sway_6s_ease-in-out_infinite_alternate-reverse] origin-bottom">
            <path d="M415 320 Q 550 300, 650 200" fill="none" stroke="#2d1e16" strokeWidth="20" />
          </g>

          {/* Aerial Roots */}
          <g className="animate-[dangle_4s_ease-in-out_infinite_alternate] origin-top">
            <line x1="200" y1="240" x2="200" y2="450" stroke="#3e2723" strokeWidth="2" opacity="0.6" />
            <line x1="280" y1="280" x2="280" y2="480" stroke="#3e2723" strokeWidth="2" opacity="0.4" />
            <line x1="520" y1="280" x2="520" y2="480" stroke="#3e2723" strokeWidth="2" opacity="0.4" />
            <line x1="600" y1="240" x2="600" y2="450" stroke="#3e2723" strokeWidth="2" opacity="0.6" />
          </g>

          {/* Canopy - slow sway */}
          <g className="animate-[sway_8s_ease-in-out_infinite_alternate] origin-bottom" opacity="0.9">
            <ellipse cx="400" cy="80" rx="180" ry="70" fill="#1b5e20" />
            <ellipse cx="200" cy="180" rx="140" ry="60" fill="#2e7d32" />
            <ellipse cx="600" cy="180" rx="140" ry="60" fill="#2e7d32" />
            <ellipse cx="400" cy="130" rx="220" ry="80" fill="#388e3c" opacity="0.7" />
          </g>
        </svg>
      </div>

      {/* Falling Leaves Animation */}
      <LeafAnimation />

      {/* Signup Card */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="bg-white/35 backdrop-blur-[15px] rounded-3xl border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.2)] p-12 w-[350px] text-center">
          <h1 className="text-3xl font-light tracking-[0.2em] text-[#6d4c41] mb-2">ZENVEDA</h1>
          <p className="text-xs mb-8 text-[#6d4c41]/60">INNOVATIVE SOLUTIONS</p>
          
          {success ? (
            <div className="py-8">
              <div className="text-[#689f38] text-lg font-medium mb-2">Account Created!</div>
              <p className="text-[#6d4c41]/70 text-sm">Please check your email to verify your account. Redirecting to login...</p>
            </div>
          ) : (
            <form onSubmit={handleSignup}>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border-none bg-[rgba(104,159,56,0.8)] text-white placeholder-white/70 outline-none transition-all duration-300"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border-none bg-[rgba(104,159,56,0.8)] text-white placeholder-white/70 outline-none transition-all duration-300"
                  minLength={6}
                  required
                />
              </div>

              {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-500/20 text-red-600 text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full mt-3"
              >
                SIGN UP
              </Button>
            </form>
          )}

          <div className="mt-5 text-xs text-[#6d4c41]">
            Already a member?{' '}
            <Link href="/login" className="text-[#689f38] font-bold hover:underline">
              Login!
            </Link>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes sway {
          0% { transform: rotate(-1.5deg) skewX(-1deg); }
          100% { transform: rotate(1.5deg) skewX(1deg); }
        }
        @keyframes dangle {
          0% { transform: rotate(-2deg); }
          100% { transform: rotate(2deg); }
        }
      `}</style>
    </div>
  );
}

// Optimized Leaf Animation Component
function LeafAnimation() {
  const [leaves, setLeaves] = useState<Array<{id: number; x: number; y: number; size: number; speed: number; rotation: number}>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setLeaves(prev => [
        ...prev.slice(-20), // Keep max 20 leaves for performance
        {
          id,
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
          y: -30,
          size: Math.random() * 10 + 8,
          speed: Math.random() * 1 + 1,
          rotation: Math.random() * 360,
        }
      ]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animate = () => {
      setLeaves(prev => 
        prev.map(leaf => ({
          ...leaf,
          y: leaf.y + leaf.speed,
          rotation: leaf.rotation + 2,
        })).filter(leaf => leaf.y < (typeof window !== 'undefined' ? window.innerHeight : 800))
      );
      requestAnimationFrame(animate);
    };
    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className="absolute leaf"
          style={{
            left: leaf.x,
            top: leaf.y,
            width: leaf.size,
            height: leaf.size * 1.5,
            background: 'linear-gradient(135deg, #8bc34a, #33691e)',
            borderRadius: '0 80% 0 80%',
            filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))',
            transform: `rotate(${leaf.rotation}deg) rotateX(${leaf.rotation * 0.5}deg)`,
          }}
        />
      ))}
    </div>
  );
}


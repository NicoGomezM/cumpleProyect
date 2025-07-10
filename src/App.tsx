import React, { useState, useEffect, useRef } from 'react';
import { Heart, Star, Music, Sparkles, Gift, Cake, VolumeX, Volume2 } from 'lucide-react';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Trigger confetti animation on load
    setShowConfetti(true);

    // Auto-play celebratory sounds simulation
    const timer = setTimeout(() => {
      setMusicPlaying(true);
    }, 200);

    if (audioRef.current) {
      audioRef.current.loop = true; // Para que se repita
      audioRef.current.volume = 0.15; // Volumen al 15%
    }

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error: unknown) => {
          console.log('Error al reproducir audio:', error);
        });
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600 overflow-hidden relative">
        {/* Animated Background Elements */}
        <audio 
          ref={audioRef} 
          src="/cumpleanos.mp3"
          preload="auto"
        />
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Hearts */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`heart-${i}`}
              className="absolute text-pink-300 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <Heart className="w-6 h-6" />
            </div>
          ))}

          {/* Floating Stars */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute text-yellow-300 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <Star className="w-5 h-5" />
            </div>
          ))}

          {/* Sparkles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute text-white animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            >
              <Sparkles className="w-4 h-4" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
          {/* Music Control */}
          <div className="absolute top-8 right-8">
            <button
              onClick={toggleMusic}
              className={`p-4 rounded-full transition-all duration-300 ${
                musicPlaying 
                  ? 'bg-yellow-400 text-purple-800 animate-pulse' 
                  : 'bg-purple-800 text-white hover:bg-purple-700'
              }`}
              title={musicPlaying ? 'Pausar música' : 'Reproducir música'}
            >
              {musicPlaying ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12 animate-bounce">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 drop-shadow-lg">
              🎉 ¡FELIZ
            </h1>
            <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-300 mb-4 drop-shadow-lg animate-pulse">
              CUMPLEAÑOS
            </h1>
            <h1 className="text-6xl md:text-8xl font-extrabold text-purple-400 mb-4 drop-shadow-lg animate-pulse">
              CLAU! 🎂
            </h1>
          </div>

          {/* Cute Cats Section */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Cat 1 - Amigurumi style */}
            <div className="relative transform hover:scale-110 transition-transform duration-300 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center relative">
                <div className="text-6xl">🐱</div>
                <div className="absolute -top-2 -right-2 text-2xl animate-spin">🎀</div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Miau! 🎉
              </div>
            </div>

            {/* Cat 2 - Party Hat */}
            <div className="relative transform hover:scale-110 transition-transform duration-300 animate-bounce" style={{ animationDelay: '1s' }}>
              <div className="w-32 h-32 bg-pink-200 rounded-full shadow-2xl flex items-center justify-center relative">
                <div className="text-6xl">🐱</div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-3xl">🎩</div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Fiesta! 🎊
              </div>
            </div>

            {/* Cat 3 - Gift */}
            <div className="relative transform hover:scale-110 transition-transform duration-300 animate-bounce" style={{ animationDelay: '1.5s' }}>
              <div className="w-32 h-32 bg-yellow-200 rounded-full shadow-2xl flex items-center justify-center relative">
                <div className="text-6xl">🐱</div>
                <div className="absolute -bottom-2 -right-2 text-2xl animate-pulse">🎁</div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Regalo! 🎈
              </div>
            </div>
          </div>

          {/* Birthday Message */}
          <div className="text-center mb-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-pulse">
              ¡Que tengas un día maravilloso! 🌟
            </h2>
            <p className="text-2xl text-purple-100 mb-6">
              Lleno de cariño, risas y momentos especiales ✨
            </p>
            <div className="flex justify-center gap-4 text-4xl animate-bounce">
              <Cake className="text-yellow-300" />
              <Gift className="text-pink-300" />
              <Heart className="text-red-300" />
            </div>
          </div>

          {/* Amigurumi Style Decorations */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {/* Cute Amigurumi Elements */}
            <div className="w-20 h-20 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-2xl">🧸</span>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl">🎀</span>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
              <span className="text-2xl">🌸</span>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-green-500 rounded-full shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '1.5s' }}>
              <span className="text-2xl">🦋</span>
            </div>
          </div>

          {/* Celebration Button */}
          <button
            onClick={() => setShowConfetti(!showConfetti)}
            className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300 animate-bounce"
          >
            🎉 ¡Celebremos! 🎉
          </button>

          {/* Floating Balloons */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={`balloon-${i}`}
                className="text-6xl animate-bounce"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '3s',
                }}
              >
                🎈
              </div>
            ))}
          </div>
        </div>

        {/* Confetti Effect */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={`confetti-${i}`}
                className="absolute w-2 h-2 animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: ['#ff69b4', '#9370db', '#ffd700', '#00ffff', '#ff6347'][Math.floor(Math.random() * 5)],
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Music Visualization */}
        {musicPlaying && (
          <div className="absolute top-24 right-8 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={`music-bar-${i}`}
                className="w-2 bg-yellow-400 rounded-full animate-pulse"
                style={{
                  height: `${20 + Math.random() * 30}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      <footer>
        <p className="text-center text-gray-500 text-sm container mx-auto color-gray-500">
          Hecho con ❤️ por [Ya tu sae] <br />
          &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}

export default App;
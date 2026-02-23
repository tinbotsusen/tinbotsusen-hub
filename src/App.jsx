import React from 'react';

const GAMES = [
  {
    id: "kenetsu",
    title: "検閲の達人",
    catch: "有害ネットミームクイズ",
    description: "ビジネス文書に紛れ込んだ不適切な表現（ネットミーム）を仕分け、会社の秩序を守る仕分けアクション。",
    url: "https://kenetsu-no-tatsujin.vercel.app/",
    image: "/kenetsu.jpg", 
    color: "from-red-600 to-slate-900",
    tags: ["シミュレーター", "ネットミーム", "検閲"]
  },
  {
    id: "hacking",
    title: "傍受王者ハッキング",
    catch: "反射神経&動体視力タップアクション",
    description: "世は大ハッカー時代。PC教室の受講生から、狡猾なエージェントまで、さまざまなライバルをなぎ倒せ。",
    url: "https://interception-king-hacking.vercel.app/",
    image: "/hacking.jpg", 
    color: "from-green-600 to-black",
    tags: ["アクション", "ハッキング", "リフレックス"]
  }
];

const App = () => {
  return (
    <div className="h-[100dvh] w-screen bg-[#0a0a0c] text-slate-100 font-sans flex flex-col overflow-hidden select-none">
      
      {/* ヘッダー */}
      <header className="pt-[env(safe-area-inset-top)] pb-4 px-6 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 shrink-0">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-black italic tracking-tighter text-yellow-400 leading-none">
              TINBOTSUSEN <span className="text-white">LABS</span>
            </h1>
            <p className="text-[10px] opacity-50 mt-1 uppercase tracking-widest leading-none">ちんぼつせんの研究室</p>
          </div>
          <div className="text-[10px] font-mono text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded border border-yellow-400/20">
            TOTAL: {GAMES.length}
          </div>
        </div>
      </header>

      {/* メイン：SNSリンクとゲームリスト */}
      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6 touch-pan-y">
        <section className="w-full max-w-xl mx-auto space-y-8">
          
          {/* SNS・コンタクトリンクエリア */}
          <div className="flex justify-center gap-3 pb-2">
            <a href="https://x.com/tinbotsu_sub" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-slate-800 border border-slate-700 rounded-lg text-[11px] font-bold text-slate-300 hover:text-yellow-400 hover:border-yellow-400 transition-colors shadow-sm active:scale-95">
              X (TWITTER)
            </a>
            <a href="https://www.youtube.com/@%E3%81%A1%E3%82%93%E3%81%BC%E3%81%A4%E3%81%9B%E3%82%93%E3%81%AE%E5%AE%9D%E7%89%A9%E5%BA%AB" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-slate-800 border border-slate-700 rounded-lg text-[11px] font-bold text-slate-300 hover:text-yellow-400 hover:border-yellow-400 transition-colors shadow-sm active:scale-95">
              YOUTUBE
            </a>
            <a href="mailto:sizumutinbotsu@gmail.com" className="flex-1 text-center py-2 bg-slate-800 border border-slate-700 rounded-lg text-[11px] font-bold text-slate-300 hover:text-yellow-400 hover:border-yellow-400 transition-colors shadow-sm active:scale-95">
              CONTACT
            </a>
          </div>

          {/* ゲームリスト */}
          {GAMES.map((game) => (
            <a 
              key={game.id}
              href={game.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 transition-all active:scale-[0.97] shadow-2xl"
            >
              <div className="aspect-video w-full overflow-hidden relative border-b border-slate-700">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                   <h2 className="text-2xl font-black drop-shadow-lg leading-tight">{game.title}</h2>
                   <p className="text-[11px] text-yellow-400 font-bold italic drop-shadow-md">{game.catch}</p>
                </div>
              </div>

              <div className="p-4 bg-[#121214]/95">
                <div className="flex gap-1 mb-3">
                  {game.tags.map(tag => (
                    <span key={tag} className="text-[8px] bg-slate-800 px-2 py-0.5 rounded-full uppercase tracking-tighter text-slate-400 border border-slate-700">{tag}</span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed italic border-l-2 border-slate-700 pl-3">
                  "{game.description}"
                </p>
                <div className="mt-4 w-full py-3 bg-white text-black font-black text-center text-sm rounded-xl group-hover:bg-yellow-400 transition-colors shadow-[0_4px_0_0_#ccc]">
                  PLAY NOW
                </div>
              </div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
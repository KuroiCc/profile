import './CodeAnimation.css'

export const CodeAnimation: React.FC = () => {
  const welcomeTo = `  __          __  _                            _        
  \\ \\        / / | |                          | |       
   \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___  | |_ ___  
    \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\ | __/ _ \\ 
     \\  /\\  /  __/ | (_| (_) | | | | | |  __/ | || (_) |
      \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|  \\__\\___/ 
`
  const kuroiCCs = `   __    __                                __         ______             __
  /  |  /  |                              /  |       /      \\           /  |       
  $$ | /$$/  __    __   ______    ______  $$/       /$$$$$$  |  _______ $$/_______ 
  $$ |/$$/  /  |  /  | /      \\  /      \\ /  |      $$ |  $$/  /       |$//       |
  $$  $$<   $$ |  $$ |/$$$$$$  |/$$$$$$  |$$ |      $$ |      /$$$$$$$/  /$$$$$$$/ 
  $$$$$  \\  $$ |  $$ |$$ |  $$/ $$ |  $$ |$$ |      $$ |   __ $$ |       $$      \\ 
  $$ |$$  \\ $$ \\__$$ |$$ |      $$ \\__$$ |$$ |      $$ \\__/  |$$ \\_____   $$$$$$  |
  $$ | $$  |$$    $$/ $$ |      $$    $$/ $$ |______$$    $$/ $$       | /     $$/ 
  $$/   $$/  $$$$$$/  $$/        $$$$$$/  $$//      |$$$$$$/   $$$$$$$/  $$$$$$$/  
                                             $$$$$$/                                                                                                                                                             
`
  const profileSite = `   _______                       ______   __  __                   ______   __    __               
  /       \\                     /      \\ /  |/  |                 /      \\ /  |  /  |              
  $$$$$$$  | ______    ______  /$$$$$$  |$$/ $$ |  ______        /$$$$$$  |$$/  _$$ |_     ______  
  $$ |__$$ |/      \\  /      \\ $$ |_ $$/ /  |$$ | /      \\       $$ \\__$$/ /  |/ $$   |   /      \\ 
  $$    $$//$$$$$$  |/$$$$$$  |$$   |    $$ |$$ |/$$$$$$  |      $$      \\ $$ |$$$$$$/   /$$$$$$  |
  $$$$$$$/ $$ |  $$/ $$ |  $$ |$$$$/     $$ |$$ |$$    $$ |       $$$$$$  |$$ |  $$ | __ $$    $$ |
  $$ |     $$ |      $$ \\__$$ |$$ |      $$ |$$ |$$$$$$$$/       /  \\__$$ |$$ |  $$ |/  |$$$$$$$$/ 
  $$ |     $$ |      $$    $$/ $$ |      $$ |$$ |$$       |      $$    $$/ $$ |  $$  $$/ $$       |
  $$/      $$/        $$$$$$/  $$/       $$/ $$/  $$$$$$$/        $$$$$$/  $$/    $$$$/   $$$$$$$/ 
`
  return (
    <section className="text-xs min-h-[calc(100vh-36px)] md:min-h-full shadow-inner shadow-[rgba(225,29,72,0.1)] md:shadow-2xl md:shadow-[rgba(225,29,72,0.3)] md:rounded-xl md:text-base text-zinc-100 bg-zinc-900 font-code">
      <div className="hidden w-full bg-zinc-800 md:block h-7 rounded-t-xl">
        <div className="hidden h-full ml-5 space-x-2 md:flex md:items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>
      <div className="p-5">
        <code>
          Last login: Mon May 16 08:41:10
          <br />
          <br />
          <span className="text-rose-500">Kuroi_Cc@site:/$ </span>
          <span>
            <span className="caretStyle typingAnimation">sudo show-my-personal-site</span>
            <div className="appearWarning">
              <br />
              <span>
                We trust you have received the usual lecture from the local System Administrator.
                <br />
                It usually boils down to these three things:
                <br />
                <br />
                <div className="pl-8">
                  #1) Respect the privacy of others. <br />
                  #2) Think before you type. <br />
                  #3) With great power comes great responsibility. <br />
                </div>
                <br />
                <span className="caretStyle caretPassword">Password: </span>
              </span>
            </div>
          </span>
        </code>
        <div>
          <div className="appearWelcome">
            <div className="-mt-20 -mb-16 -ml-4 text-xs whitespace-pre origin-left scale-50 sm:scale-75 sm:-my-2 sm:-mt-8 h-96 sm:ml-0">
              <div className="ml-32">{welcomeTo}</div>
              <div className="ml-14">{kuroiCCs}</div>
              <div>{profileSite}</div>
            </div>
            <div className="text-rose-500 caretStyle caretInfinity">Kuroi_Cc@site:/$&nbsp;</div>
          </div>
        </div>
      </div>
    </section>
  )
}

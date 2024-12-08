import ModeSelector from '~/components/comics/mode-selector';
import type { Props } from './types';



export default function ComicsPage({ children, isSearching, mode }: Props) {
    return (
        <main className=" min-h- flex flex-col grow min-h-[calc(100dvh-7rem)] bg-gradient-to-b from-purple-1000 to-purple-900">
            <div className={`flex flex-col landscape-narrow:pt-[5dvh]  my-auto ${isSearching && "animate-pulse"} `}>
                <h2 className="text-7xl dmd:text-8xl text-center text-purple-300 font-bold font-socrates mt- mb-4 tracking- wider"><img src="/main/eterna-raw.png" className="w-[300px] mb-2 mx-auto"></img></h2>
                {children}
                <ModeSelector mode={mode} />
            </div>
        </main>
    )
}

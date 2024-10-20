
interface ScrollIndicatorProps {
    targetId: string;
}


export default function ScrollIndicator(props: ScrollIndicatorProps) {
    const {targetId} = props;

    return (
        <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                document.getElementById(targetId)?.scrollIntoView({behavior: 'smooth'})
            }} className="animate-bounce h-8 w-8 text-gray-800"
                 fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 4v16m0 0l-4-4m4 4l4-4"/>
            </svg>
        </div>
    );
}
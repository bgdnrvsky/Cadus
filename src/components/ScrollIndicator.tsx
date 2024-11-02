
interface ScrollIndicatorProps {
    targetId: string;
}


export default function ScrollIndicator(props: ScrollIndicatorProps) {
    const {targetId} = props;

    return (
        <div className="flex justify-center mb-6">
            <a className="animate-bounce shadow-lg border-2 border-transparent text-white rounded-full hover:border-cadus-green hover:text-cadus-green transition" href={targetId}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800"
                     fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4"/>
                </svg>
            </a>
        </div>
    );
}
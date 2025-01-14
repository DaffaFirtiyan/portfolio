function TimelineItem( {year, title, location, duration, details} ) {
    return(
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-800 rounded-md dark:text-stone-900 dark:bg-stone-100">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                        {title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-stone-700 dark:text-stone-200">
                        {location}
                    </div>
                    <div className="my-1 text-sm font-normal leading-none text-stone-600 dark:text-stone-300">
                        {duration}
                    </div>
                </p>
                <ul className="my-2 text-base font-normal text-stone-600 dark:text-stone-300 list-disc">
                    {Array.isArray(details) ? (
                        details.map((detail, index) => (
                            <li key={index} className="-ml-1.5 pl-1.5">{detail}</li>
                        ))
                    ) : null}
                </ul>
            </li>
        </ol>
    );
}

export default TimelineItem
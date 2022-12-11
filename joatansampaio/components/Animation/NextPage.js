
export default function NextPage() {

    return (
        <a className="absolute left-1/2 -translate-x-3 bottom-24 w-fit h-fit">
            <div className="animate-bounce cursor-pointer relative -left-1/2">
                <div className="border w-10 rotate-45 before:w-10 before:border before:-rotate-90 before:left-1/2 before:-top-5 before:absolute mb-4"></div>
                <div className="border w-10 rotate-45 before:w-10 before:border before:-rotate-90 before:left-1/2 before:-top-5 before:absolute"></div>
            </div>
        </a>
    )

}
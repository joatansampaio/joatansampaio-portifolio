function FloatingBall(props) {
        const { icon, attr } = props;

        const classList_ = "" + attr + " w-32 h-0 absolute before:w-12 before:-right-1 before:-top-5 before:absolute before:h-9 top-1/2 left-1/2 origin-left md:w-60 md:before:w-20";
        return (

                <div className={classList_}></div>
        );
}
export default FloatingBall;
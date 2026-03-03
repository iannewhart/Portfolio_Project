const PrevArrow = ({ onClick }) => {
    return (
        <button className="carousel-arrow prev-arrow" onClick={onClick} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
};

const NextArrow = ({ onClick }) => {
    return (
        <button className="carousel-arrow next-arrow" onClick={onClick} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
};
export { PrevArrow, NextArrow };
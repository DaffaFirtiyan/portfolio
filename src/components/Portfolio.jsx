import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
    return(
        <div className="flex flex-col md:flex-col items-center justify-center">
            <Title>Projects</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolio.map(project => (
                    <PortfolioItem 
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio
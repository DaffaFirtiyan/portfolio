function Intro() {
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Daffa Firtiyan</h1>
            <p className="text-base md:text-xl mb-3 font-medium">I'm a Data Analyst.</p>
            <p className="text-sm max-w-xl mb-6">
            That means I solve problems.<br></br>
            Not problems like, "What is beauty?" — 'cause that would fall within the purview of your conundrums of philosophy.<br></br>
            I solve practical problems.<br></br>
            <br></br>
            For instance, how am I gonna stop a tourism economy from tankin' after a major event?<br></br>
            The answer?<br></br>
            Use data. If that don't work?<br></br>
            Use analysis.<br></br>
            <br></br>
            Like this lil' old model <a href="assets/model.jpg" target="_blank" className="dark:text-orange-300 text-violet-600">here</a>,<br></br>
            Designed by me.<br></br>
            Built by me.<br></br>
            And you best hope.. not misinterpreted by you.<br></br>
            </p>
            {/* <button>Here's my CV</button> */}
        </div>
    );
}

export default Intro
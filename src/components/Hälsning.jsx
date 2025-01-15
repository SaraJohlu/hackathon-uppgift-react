import { useState } from "react"

const Hälsning = () => {
    const [namn, setName] = useState("");
    const [hälsning, hälsat] = useState("");

    const Submit = (e) => {
        e.preventDefault();

        const timma = new Date().getHours();
        let nuvarandeTimma;

        if (timma < 12) 
            { nuvarandeTimma = "God Morgon"}
        else if (timma < 18) {
            nuvarandeTimma = "God eftermiddag"
        } 
        else {
            nuvarandeTimma = "Godkväll"
        }

        hälsat(`${nuvarandeTimma}, ${namn}`)
};
    return (
        <>
        <form onSubmit={Submit}>
        <h1 className="enter-name">Skriv gärna in ditt namn nedan</h1>
        <p className="arrow">⬇</p>
        <input type="text" placeholder="Namn" value={namn} onChange={(e) => setName(e.target.value)} className="input-container" />
        <button type="submit" className="check-button">✔</button>
        </form>
        {hälsning && <h2 className="hälsning-tbx">{hälsning}</h2>}
        </>

    );
};

export default Hälsning

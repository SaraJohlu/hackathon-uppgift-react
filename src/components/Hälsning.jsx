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
        <h1>Skriv in ditt namn nedan</h1>
        <input type="text" placeholder="Namn" value={namn} onChange={(e) => setName(e.target.value)} />
        <button type="submit">✔</button>
        </form>
        {hälsning && <h2>{hälsning}</h2>}
        </>

    );
};

export default Hälsning

import { useState } from 'preact/hooks';

import { MultiStepForm, Step } from "react-multi-form";
import { RatingInput } from "../../components/RatingInput";
import { Header } from "../../components/Header";

export const HomePage = () => {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <>
            <Header />
            <div className="container">
                <MultiStepForm activeStep={activeStep} accentColor="#31A529">
                    <Step label="Stap 1">
                        <h1><b>Coördinerende en teamgerichte taken</b></h1>
                        <RatingInput name="s1-q1" question="Periodiek planning taken en werkzaamheden maken." />
                        <br />
                        <RatingInput name="s1-q2" question="Bevorderen samenwerking leidingteam, zowel voor jeugdleden als voor leiding onderling." />
                        <RatingInput name="s1-q3" question="Bevorderen taakverdeling leidingteam, zowel voor jeugdleden als voor leiding onderling." />
                        <RatingInput name="s1-q4" question="Bevorderen gezamenlijke verantwoordelijkheid leidingteam, zowel voor jeugdleden als voor leiding onderling." />
                        <br />
                        <RatingInput name="s1-q5" question="Tonen daadkracht ten aanzien van veiligheid en optreden indien nodig." />
                        <RatingInput name="s1-q6" question="Leiderschap tonen bij crisis (voorspelbare situatie)" />
                        <RatingInput name="s1-q7" question="Aanpassen eigen houding situatie van het moment." />
                        <RatingInput name="s1-q8" question="Aanpassen eigen gedrag situatie van het moment." />
                        <RatingInput name="s1-q9" question="Juist afhandelen ongeval (onvoospelbare situatie) richting jeugdlid en ouders, in samenwerking met groepsbestuur." />
                        <br />
                        <button className="btn btn-info" onClick={() => setActiveStep(2)}>
                            Volgende
                        </button>
                    </Step>
                    <Step label="Stap 2">
                        <h1><b>Kwaliteitsbewaking team en activiteitenprogramma</b></h1>
                        <RatingInput name="s2-q1" question="Belang van de kwaliteit van het activiteitenprogramma." />
                        <RatingInput name="s2-q2" question="Bewaken kwalititeit van het activiteitenprogramma, rekening houdend met de progressiematrix." />
                        <br />
                        <RatingInput name="s2-q3" question="Actieve rol aannemen in begeleiding nieuwe teamleden tijdens introductiefase." />
                        <RatingInput name="s2-q4" question="Kwaliteit leidingteam bewaken, in overleg met team" />
                        <RatingInput name="s2-q5" question="Kwaliteit leidingteam verbeteren, in overleg met team" />
                        <RatingInput name="s2-q6" question="Kwaliteit leidingteam bewaken, in overleg met groeps- en praktijkbegeleider" />
                        <RatingInput name="s2-q7" question="Kwaliteit leidingteam verbeteren, in overleg met groeps- en praktijkbegeleider" />
                        <RatingInput name="s2-q8" question="Ontwikkelplan team opstellen, in overleg met groeps- em praktijkbegeleider" />
                        <br />
                        <RatingInput name="s2-q9" question="Complexe leeftijds- en gedragskenmerken in de eigen en naastliggende speltak verklaren, rekening houdend met ontwikkeling brein." />
                        <br />
                        <RatingInput name="s2-q10" question="Binnen leidingteam reflecteren op elkaars houding en gedrag." />
                        <RatingInput name="s2-q11" question="Stimuleren en motiveren teamleden in houdig en gedrag goed voorbeeld te geven." />
                        <br />
                        <RatingInput name="s2-q12" question="Initiatief (regelmatig) teamoverleg en evaluatie leidingteam." />
                        <RatingInput name="s2-q13" question="Zorgen zinvol overleg/evaluatie voor samenwerking en kwaliteit van spel." />
                        <br />
                        <button className="btn btn-warning" onClick={() => setActiveStep(1)}>
                            Terug
                        </button>
                        <button className="btn btn-info" onClick={() => setActiveStep(3)}>
                            Volgende
                        </button>
                    </Step>
                    <Step label="Stap 3">
                        <h1><b>Vertegenwoordiging team binnen en buiten groep</b></h1>
                        <RatingInput name="s3-q1" question="Actief participeren in overleg met eigen inbreng en afstemmig." />
                        <RatingInput name="s3-q2" question="Inzien noodzaak juiste taakverdeling." />
                        <RatingInput name="s3-q3" question="Eigen werkzaamheden afstemmen met overige teamleden." />
                        <RatingInput name="s3-q4" question="Op bekwame wijze speleenheid vertegenwoordigen binnen groep (contacten andere teamleiders, aanspreekpunt ouders)." />
                        <RatingInput name="s3-q5" question="Op bekwame wijze speleenheid vertegenwoordigen buiten groep (contacten teamleiders andere groepen, regio)." />
                        <br />
                        <button className="btn btn-warning" onClick={() => setActiveStep(2)}>
                            Terug
                        </button>
                    </Step>
                </MultiStepForm>
            </div>
        </>
    )
}

import Intro from "./00_Intro";
import InformationRetrieval from "./01_InformationRetrival";
import Similarity from "./02_Similarity";
import Queries from "./03_Queries";
import DocumentProcessing from "./04_DocumentProcessing";
import Thesaurus from "./05_Thesaurus";
import InformationContent from "./06_InformationContent";
import AnalisiLessicale from "./07_AnalisiLessicale";
import Indexing from "./08_Indexing";
import Modeling from "./09_Modeling";
import Evaluation from "./10_Evaluation";


export default function () {
    return (
        <div>
            <h1>Gestione dell'informazione</h1>
            <Intro/>
            <InformationRetrieval/>
            <Queries/>
            <DocumentProcessing/>
            <Thesaurus/>
            <InformationContent/>
            <Similarity/>
            <AnalisiLessicale/>
            <Indexing/>
            <Modeling/>
            <Evaluation/>
        </div>
    )
}

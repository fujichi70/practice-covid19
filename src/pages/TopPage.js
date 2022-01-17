import { Title } from "../components/Title";
import { Selector } from "../components/Selector";
import { Result } from "../components/Result";
import { Header } from "../components/Header";


export const TopPage = (props) => {
    const { countriesJson, setCountry, getCountryData, countryData } = props;
    return (
        <div className="top-page-container">
        <div>
            <Header />
            <Title />
            <Selector countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} />
            <Result countryData={countryData} />
            </div>
        </div>
    );
};
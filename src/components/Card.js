export const Card = (props) => {
    const { allCountriesData } = props;
    return (
        <div className="card-container">
        {allCountriesData.map((singleData, index) => 
            <div key={index} className="card">
                <div>
                <h2>{singleData.Country}</h2>
                <p>新規感染者: <span>{singleData.NewConfirmed.toLocaleString()}</span> 人</p>
                <p>感染者総数: <span>{singleData.TotalConfirmed.toLocaleString()}</span> 人</p>
                <p>死者数: <span>{singleData.NewDeaths.toLocaleString()}</span> 人</p>
                </div>
            </div>
        )}
        </div>
    );
};
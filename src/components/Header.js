import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Header = () => {
    return (
        <div className="header">
        <Link exact to='/'>国ごとの感染状況</Link>
        <Link to='/World'>世界の感染状況</Link>
        </div>
    );
};
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
};

const btnWrapper = {
    minHeight: '105px',
};

const btn = {
    display: 'block',
    margin: '20px auto',
    width: '300px',
    minHeight: '65px',
    borderRadius: '30px',
    border: 'none',
    fontWeight: '700',
    fontSize: '18px',
    backgroundColor: '#00c78b',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: '65px',
}


const Layout = () => {
    const {text: {idText}, image: {idImg}} = useSelector(state => state);
    return (
        <div style={wrapper}>
            <Header />
            <Outlet />
            <div style={btnWrapper}>
            {idText && idImg && (
                <Link style={btn} to={`singleCard/${idText}/${idImg}`}>
                    Поделиться открыткой
                </Link>
            )}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
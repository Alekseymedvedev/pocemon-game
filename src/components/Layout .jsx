import classes from "./Layout.module.css";
// import bgImg from '../images/bg2.jpg';

const Layout = ({urlBg,title,descr,colorBg="#e2e2e2"}) => {
    const layoutStyle =
    urlBg? { backgroundImage: `url(${urlBg})`}: {backgroundColor:`${colorBg}`}
    return (
        <section class={classes.root} style={layoutStyle}>
            {/* <img src={bgImg} alt="" /> */}
            <div class={classes.wrapper}>
                <article>
                    <div class={classes.title}>
                        <h3>{title}</h3>
                        <span class={classes.separator}></span>
                    </div>
                    <div class={`${classes.desc} ${classes.full}`}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
};
export default Layout;

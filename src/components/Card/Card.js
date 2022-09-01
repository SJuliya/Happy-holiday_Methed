import style from "../Main/Main.module.css";

const Main = () => (
    <main className={style.main}>
        <div className={style.card}>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <img className={style.img} src="" alt=""/>
                    <p className={style.felicitation}>
                        Поздравляю с днем рожденья!
                        Пусть будет жизнь полна веселья,
                        Не будет грусти и хлопот,
                        А только счастье круглый год!

                        Желаю творческих успехов,
                        Прекрасных дней, улыбок, смеха.
                        Любви, душевного тепла,
                        Как сказка, чтобы жизнь была!
                    </p>
                </div>
            </div>
        </div>
    </main>
);

export default Main;
import { Outlet } from "react-router";

export const GeneralLayout = () => {
    return (
        <>        
            <header>Header</header>
            <main>
                <Outlet/>
            </main>
        </>
    )
};

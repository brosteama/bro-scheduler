import React from 'react';
import { Route, Routes } from "react-router-dom";
import routes from 'routes';

const Content = () => {
    return (
        <Routes>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default Content;
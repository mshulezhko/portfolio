
import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
export default function reRender(state) {
    root.render(
        <React.StrictMode>
            <App
                // dialogPage={state.dialogPage}
                //     profilePage={state.profilePage}
                //     sideBar={state.sideBar}
                //     dispatch={store.dispatch.bind(store)}
                state={state}
                store={store}

            />
        </React.StrictMode>
    );
}

reRender(store.getState())

store.subscribe(() => {
    let state = store.getState()
    reRender(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


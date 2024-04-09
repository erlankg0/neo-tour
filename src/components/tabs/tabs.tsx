import React from "react";
import classNames from "classnames";
import styles from './tabs.module.css'
import './tabs.module.css'

interface ITab {
    id: string,
    label: string,
}

interface ITabs {
    className?: string,
    selectedID: string,
    tabs: ITab[],
    onClickTab: (id: string) => void;
}

const Tabs: React.FC<ITabs> = ({className, tabs, onClickTab, selectedID}) => {
    return (
        <div className={classNames(styles.Tabs, className)}>
            {tabs.map((tab) => {
                return (
                    <div
                        className={classNames(styles.Tab, {TabLabelSelected: tab.id === selectedID})}
                        key={tab.id}
                        onClick={() => onClickTab(tab.id)}
                    >
                        <div className={classNames(styles.TabLabel)}>
                            {tab.label}
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Tabs;
export type {ITabs, ITab}

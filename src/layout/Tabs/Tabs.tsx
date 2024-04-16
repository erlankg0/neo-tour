import React, {useState} from "react";
import {Typography} from "antd";
import classNames from "classnames";
import Tabs, {ITab} from "../../components/tabs/tabs.tsx";
import styles from './tabs.module.css'

const TabsLayout: React.FC = () => {
    const [selectedID, setSelected] = useState('1');
    const tabs: ITab[] = [
        {
            id: '1',
            label: 'Popular',
            data: 'PopularLabel 2Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir...'
        },
        {
            id: '2',
            label: 'Label 2',
            data: 'PopularLabel 2Neden Kullanırız? Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir...'
        }];

    const handleTabOnClick = (id: string) => {
        setSelected(id)
    }

    const selectedTabData = tabs.find(tab => tab.id === selectedID)?.data;

    return (
        <div className={'container'}>
            <Typography.Title className={classNames('title')}>Discovery</Typography.Title>
            <Tabs tabs={tabs} selectedID={selectedID} onClickTab={handleTabOnClick}/>
            <div className={styles.content}>
                {tabs.map((tab) => (
                    <Typography.Text key={tab.id}>{tab.label}</Typography.Text>
                ))}
                {selectedTabData && (
                    <Typography.Text>
                        {selectedTabData}
                    </Typography.Text>
                )}
            </div>
        </div>
    )
}

export default TabsLayout;

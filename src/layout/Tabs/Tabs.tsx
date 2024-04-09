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
            label: 'Popular'
        },
        {
            id: '2',
            label: 'Label 2'
        }]

    const handleTabOnClick = (id: string) => {
        setSelected(id)
    }
    return (
        <div className={'container'}>
            <Typography.Title className={classNames('title')}>Discovery</Typography.Title>
            <Tabs tabs={tabs} selectedID={selectedID} onClickTab={handleTabOnClick}/>
            <div className={styles.content}>
                {tabs.map((tab) => (
                    <Typography.Text>{tab.label}</Typography.Text>
                ))}
                {selectedID == tabs[0].id && (
                    <Typography.Text>
                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
                        bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
                        karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz
                        yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
                        sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile
                        ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
                        yazılımları ile popüler olmuştur.
                    </Typography.Text>
                )}
                {selectedID == tabs[1].id && (
                    <Typography.Text>
                        Neden Kullanırız?
                        Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum
                        kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha
                        dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık
                        paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır.
                        Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım
                        aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak
                        (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.
                    </Typography.Text>
                )}
            </div>
        </div>
    )
}

export default TabsLayout;
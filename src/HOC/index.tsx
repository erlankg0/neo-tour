import React, { ComponentType } from 'react';

// Определяем интерфейс для пропсов HOC
interface WithBackgroundImageProps {
    imageUrl: string;
}

// HOC для добавления заднего фона изображения
function withBackgroundImage<T extends WithBackgroundImageProps>(
    WrappedComponent: ComponentType<T>,
    imageUrl: string
) {
    // Определяем тип для HOC
    return class extends React.Component<Omit<T, keyof WithBackgroundImageProps>> {
        render() {
            return (
                <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
                    <WrappedComponent {...this.props as T} />
                </div>
            );
        }
    };
}

export default withBackgroundImage;

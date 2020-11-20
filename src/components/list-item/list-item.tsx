import React from 'react';
import { List } from 'react-native-paper';

/**
 * type checking.
 */
interface ListItemProps {
    title: string;
    onPress: () => void;

    /**
     * useful as 'string', only if 'paperIcon' is provided.
     */
    leftIcon?: string | React.ReactNode;

    leftPaperIcon?: boolean;
};

/**
 * A function component that shows a list item.
 */
function ListItem({
    title,
    onPress,
    leftPaperIcon = false,
    leftIcon
}: ListItemProps) {

    /**
     * Renderes left icon.
     */
    const renderLeftIcon = props => {
        let listItemComponent = null;
        if (leftPaperIcon)
            listItemComponent = (<List.Icon {...props} icon="folder" />);
        else
            listItemComponent = leftIcon;

        return listItemComponent;
    };

    return (
        <List.Item
            title={title}
            onPress={onPress}
            left={renderLeftIcon}
        />
    );
};

/**
 * export as default.
 */
export default ListItem;
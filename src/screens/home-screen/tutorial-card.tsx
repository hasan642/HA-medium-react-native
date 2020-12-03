import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import {
    Card,
    Avatar
} from 'react-native-paper';
import styles from './styles';
import { Text } from 'components';
import { color } from 'theme';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * type checking.
 */
interface TutorialCardProps {
    title: string;
    subTitle: string;
    imgUri: string;
    onPress: () => void;
    handleMenuIconPress: () => void;
};

/**
 * A function component that shows a tutorial card.
 */
function TutorialCard(props: TutorialCardProps) {

    /**
     * grap the props.
     */
    const {
        title,
        subTitle,
        imgUri,
        onPress,
        handleMenuIconPress
    } = props;

    return (
        <Card
            onPress={onPress}
            onLongPress={onPress}
            style={styles.listItem}
        >
            <Card.Content style={styles.contentStyle}>
                <View style={styles.cardContentStyle}>
                    <Text
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={styles.title}
                    >
                        {title}
                    </Text>

                    <View style={styles.bottomSection}>
                        <Text style={styles.subTitle}>
                            {subTitle}
                        </Text>

                        <TouchableOpacity
                            onPress={() => console.log('Pressed')}
                            activeOpacity={1}
                        >
                            <View pointerEvents='none'>
                                <MIcon
                                    style={styles.icon}
                                    name={'dots-horizontal'}
                                    color={color.mineShaft}
                                    onPress={handleMenuIconPress}
                                    size={24}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <Avatar.Image
                    size={60}
                    source={{ uri: imgUri }}
                />
            </Card.Content>
        </Card>
    );
};

/**
 * export as default.
 */
export default TutorialCard;
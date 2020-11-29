import React, {
    useRef,
    useState,
    useEffect
} from 'react';
import { NavigationComponentProps } from 'react-native-navigation';
import {
    View,
    Animated,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import {
    Header,
    Button
} from 'components';
import {
    translate,
    LanguagesKeys,
    changeLanguage
} from 'i18n';
import { dismissModal } from 'navigation';
import {
    color,
    typography,
    responsiveFontSize
} from 'theme';
import { Text as AnimatedTxt } from 'react-native-animatable';
import { StorageHelper } from 'utils';
import { LanguageModel } from 'utils/storage/storage.types';

/**
 * type checking.
 */
interface LangaugeSwitcherScreenProps extends NavigationComponentProps {

};
type Langauge = {
    title: string;
    lang: LanguagesKeys;
};

/**
 * A function component that shows a LangaugeSwitcherScreen.
 */
function LangaugeSwitcherScreen(props: LangaugeSwitcherScreenProps) {

    /**
     * state.
     */
    const [selectedLangauge, setSelectedLangauge] = useState<Langauge>(null);
    const [languages, setLanguages] = useState<Langauge[]>([]);

    /**
     * useEffect
     */
    useEffect(
        () => {

            /**
             * async fetch data.
             */
            async function asyncSetupData() {
                const languageFromStorage = await StorageHelper.get('@Language') as LanguageModel;
                const languages: Langauge[] = [
                    {
                        title: translate('settingsScreen.english'),
                        lang: 'en'
                    },
                    {
                        title: translate('settingsScreen.hindi'),
                        lang: 'hi'
                    },
                    {
                        title: translate('settingsScreen.french'),
                        lang: 'fr'
                    },
                    {
                        title: translate('settingsScreen.arabic'),
                        lang: 'ar'
                    },
                ];

                /**
                 * update state.
                 */
                const lang = languageFromStorage ? languageFromStorage.lang : 'en';
                const selectedLang: Langauge = {
                    lang,
                    title: languages.find(language => language.lang === lang).title
                }
                setLanguages(languages);
                setSelectedLangauge(selectedLang);
            };

            /**
             * execute async function.
             */
            asyncSetupData();
        },
        []
    );

    /**
     * refs.
     */
    const textRefs = useRef({});

    /**
     * Handles go back.
     */
    const handleGoBack = () => {
        dismissModal(props.componentId);
    };

    /**
     * Handles selecte langauge.
     */
    const handlePressLangauge = (language: Langauge) => {

        /**
         * animate text in selected btn.
         */
        textRefs.current[language.lang].bounceIn(800);

        /**
         * set selected language.
         */
        setSelectedLangauge(language);

    };

    /**
     * Handle select langauge.
     */
    const handleSelectLangauge = () => {
        const { lang } = selectedLangauge;

        let isRTL = false;
        let language: LanguagesKeys = 'en';

        switch (lang) {
            case 'ar':
                isRTL = true;
                language = 'ar';
                break;

            case 'fr':
                language = 'fr';
                break;

            case 'hi':
                language = 'hi';
                break;
        };

        /**
         * change application language.
         */
        changeLanguage(language, isRTL);
      
    };

    return (
        <View style={styles.container}>
            <Header
                handleGoBack={handleGoBack}
                style={styles.header}
            />

            <Animated.ScrollView
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.scrollView}
            >
                {
                    languages.map(language => {
                        const isSelected = selectedLangauge && selectedLangauge.lang === language.lang;
                        return (
                            <TouchableOpacity
                                disabled={isSelected}
                                activeOpacity={1}
                                onPress={() => handlePressLangauge(language)}
                                style={styles.languageItem}
                                key={language.lang}
                            >
                                <AnimatedTxt
                                    ref={ref => textRefs.current[language.lang] = ref}
                                    style={[
                                        styles.text,
                                        isSelected && {
                                            fontFamily: typography.bold,
                                            fontSize: responsiveFontSize(2.5),
                                            color: color.dark
                                        }
                                    ]}
                                >
                                    {language.title}
                                </AnimatedTxt>
                            </TouchableOpacity>
                        )
                    })
                }
            </Animated.ScrollView>

            <Button
                style={styles.btn}
                onPress={()=>handleSelectLangauge()}
            >
                {translate('settingsScreen.change')}
            </Button>
        </View>
    );
};

/**
 * export as default.
 */
export default LangaugeSwitcherScreen;
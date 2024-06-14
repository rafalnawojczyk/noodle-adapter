import * as Noodle from 'noodle-adapter';
import { Text, View } from 'react-native';

export default function App() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            {/* <Text>Theme: {Noodle.getScramble('555')}</Text> */}
            {/* <Text>Theme: {Noodle.getScramble('333')}</Text> */}
            {/* <Text>Theme: {Noodle.getScramble('333fm')}</Text> */}
            <Text>Theme: {Noodle.getScramble('333bf')}</Text>
            <Text>Theme: {Noodle.getScramble('333bf')}</Text>
            <Text>Theme: {Noodle.getScramble('333bf')}</Text>
            <Text>Theme: {Noodle.getScramble('333bf')}</Text>
            <Text>Theme: {Noodle.getScramble('333fmc')}</Text>
        </View>
    );
}

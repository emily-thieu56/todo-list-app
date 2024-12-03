import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }) {

  return (
      <MainLayout>
          <View>
              <h1>To Do List App</h1>
             <Text>Emily Thieu</Text>
             <Text>December 2, 2024</Text>
          </View>
          <Button
              title="Go to Home"
              onPress={() => navigation.navigate('Home')}
          />
         
      </MainLayout>
         
  );
};
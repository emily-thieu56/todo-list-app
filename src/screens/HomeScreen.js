import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation }) {

    return (
        <MainLayout>
            <View>
                <ToDoList tasks={tasks}/>
                <ToDoForm addTask={addTask}/>
            </View>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
           
        </MainLayout>
           
    );
};
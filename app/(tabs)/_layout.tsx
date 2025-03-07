import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
        name="(user)"
        options={{
            title: 'User Stack navigation',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="code" color={color} />,
          }}
      />
      <Tabs.Screen
        name="(home)"
        options={{
            title: 'Stack navigation',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="forward" color={color} />,
          }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings tab',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="newhome"
        options={{
          title: 'Another test tab',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
        }}
      />
    </Tabs>
  );
}

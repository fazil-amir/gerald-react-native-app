import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Define the tab icon types
export type TabIconName = "chart-timeline-variant" | "account-group" | "chat" | "cog";

// Tab name types for type safety
export type TabScreenName = "Status" | "Community" | "Chats" | "Settings";

/**
 * Maps tab screen names to their respective Material Community Icons
 * @param tabName The name of the tab screen
 * @returns The corresponding icon name
 */
export const getTabIcon = (tabName: TabScreenName): TabIconName => {
  const iconMap: Record<TabScreenName, TabIconName> = {
    Status: "chart-timeline-variant",
    Community: "account-group",
    Chats: "chat",
    Settings: "cog"
  };
  
  return iconMap[tabName] || "chart-timeline-variant";
};

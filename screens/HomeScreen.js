import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const MEALS = [
    { key: 'breakfast', label: 'Breakfast', kcal: 300, time: '8:00 AM', icon: require('../Assets/breakfast.png') },
    { key: 'lunch', label: 'Lunch', kcal: 400, time: '1:00 PM', icon: require('../Assets/breakfast.png') },
    { key: 'dinner', label: 'Dinner', kcal: 110, time: '8:00 PM', icon: require('../Assets/breakfast.png') },
];

const STATS = [
    { key: 'weight', label: 'My Weight', value: '68 kg', icon: require('../Assets/weight.png'), bg: '#FFE4E6', tint: '#E11D48' },
    { key: 'water', label: 'Water Intake', value: '1.8 L', icon: require('../Assets/waterdrop.png'), bg: '#DBEAFE', tint: '#2563EB' },
    { key: 'workout', label: 'Workout Plan', value: '35 min', icon: require('../Assets/handgrip.png'), bg: '#DCFCE7', tint: '#16A34A' },
];

const BANNERS = [
    { key: 'b1', title: 'Stay Hydrated', subtitle: 'Track your water goal today', bg: '#F59E0B' },
    { key: 'b2', title: '7-Day Challenge', subtitle: 'Join now & earn a badge', bg: '#8B5CF6' },
];

const KCAL_GOAL = 810;
const KCAL_CONSUMED = MEALS.reduce((sum, m) => sum + m.kcal, 0);
const KCAL_PROGRESS = Math.min(KCAL_CONSUMED / KCAL_GOAL, 1);

const HomeScreen = () => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.leftSection}>
                    <Image source={require('../Assets/profile.png')} style={styles.profileImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.greeting}>Good Morning 👋</Text>
                        <Text style={styles.name}>Towhidul</Text>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.7} style={styles.notificationButton}>
                    <Image
                        source={require('../Assets/notification (1).png')}
                        style={styles.notificationIcon}
                    />
                    <View style={styles.notificationDot} />
                </TouchableOpacity>
            </View>

            {/* Hero / Calorie Summary Card */}
            <View style={styles.heroCard}>
                <View style={styles.heroTextBlock}>
                    <Text style={styles.heroEyebrow}>TODAY'S GOAL</Text>
                    <Text style={styles.heroTitle}>{KCAL_CONSUMED} / {KCAL_GOAL} kcal</Text>
                    <Text style={styles.heroSubtitle}>
                        {KCAL_GOAL - KCAL_CONSUMED > 0
                            ? `${KCAL_GOAL - KCAL_CONSUMED} kcal left today`
                            : 'Goal reached — nice work!'}
                    </Text>
                </View>

                <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: `${KCAL_PROGRESS * 100}%` }]} />
                </View>
            </View>

            {/* Meal Plan Section */}
            <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Meal Plan</Text>
                <TouchableOpacity activeOpacity={0.6}>
                    <Text style={styles.sectionAction}>See all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mealCard}>
                {MEALS.map((meal, index) => (
                    <View key={meal.key}>
                        <View style={styles.mealRow}>
                            <View style={styles.mealIconWrap}>
                                <Image source={meal.icon} style={styles.mealIcon} />
                            </View>

                            <View style={styles.mealInfo}>
                                <Text style={styles.mealLabel}>{meal.label}</Text>
                                <Text style={styles.mealTime}>{meal.time}</Text>
                            </View>

                            <Text style={styles.mealKcal}>{meal.kcal} kcal</Text>
                        </View>
                        {index < MEALS.length - 1 && <View style={styles.mealDivider} />}
                    </View>
                ))}
            </View>

            {/* Stat Cards */}
            <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Your Stats</Text>
            </View>

            <View style={styles.statsRow}>
                {STATS.map((stat) => (
                    <TouchableOpacity
                        key={stat.key}
                        activeOpacity={0.85}
                        style={[styles.statCard, { backgroundColor: stat.bg }]}
                    >
                        <Image source={stat.icon} style={[styles.statIcon, { tintColor: stat.tint }]} />
                        <Text style={[styles.statValue, { color: stat.tint }]}>{stat.value}</Text>
                        <Text style={styles.statLabel}>{stat.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Promo Banner Carousel */}
            <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>For You</Text>
            </View>

            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToInterval={width - 40 + 12}
                decelerationRate="fast"
                contentContainerStyle={styles.bannerScroll}
            >
                {BANNERS.map((banner) => (
                    <View
                        key={banner.key}
                        style={[styles.bannerCard, { backgroundColor: banner.bg }]}
                    >
                        <Text style={styles.bannerTitle}>{banner.title}</Text>
                        <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
};

export default HomeScreen;

const CARD_RADIUS = 20;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f2965',
    },
    content: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },

    // Header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 26,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    textContainer: {
        marginLeft: 12,
    },
    greeting: {
        fontSize: 13,
        color: '#6B7280',
        fontWeight: '500',
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
        marginTop: 2,
    },
    notificationButton: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#0F172A',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    notificationIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    notificationDot: {
        position: 'absolute',
        top: 10,
        right: 11,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#F43F5E',
        borderWidth: 1.5,
        borderColor: '#FFFFFF',
    },

    // Hero card
    heroCard: {
        marginTop: 24,
        backgroundColor: '#4B5A93',
        borderRadius: CARD_RADIUS,
        padding: 22,
        shadowColor: '#111827',
        shadowOpacity: 0.25,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 },
        elevation: 6,
    },
    heroTextBlock: {
        marginBottom: 18,
    },
    heroEyebrow: {
        fontSize: 11,
        fontWeight: '700',
        color: '#4ADE80',
        letterSpacing: 1,
    },
    heroTitle: {
        fontSize: 26,
        fontWeight: '800',
        color: '#FFFFFF',
        marginTop: 6,
    },
    heroSubtitle: {
        fontSize: 13,
        color: '#9CA3AF',
        marginTop: 4,
    },
    progressTrack: {
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.12)',
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
        backgroundColor: '#4ADE80',
    },

    // Section headers
    sectionHeaderRow: {
        marginTop: 28,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: '#111827',
    },
    sectionAction: {
        fontSize: 13,
        fontWeight: '600',
        color: '#4ADE80',
    },

    // Meal card
    mealCard: {
        backgroundColor: '#4B5A93',
        borderRadius: CARD_RADIUS,
        paddingHorizontal: 18,
        paddingVertical: 6,
        shadowColor: '#0F172A',
        shadowOpacity: 0.05,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    mealRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
    },
    mealIconWrap: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mealIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    mealInfo: {
        flex: 1,
        marginLeft: 14,
    },
    mealLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },
    mealTime: {
        fontSize: 12,
        color: '#9CA3AF',
        marginTop: 2,
    },
    mealKcal: {
        fontSize: 13,
        fontWeight: '700',
        color: '#16A34A',
    },
    mealDivider: {
        height: 1,
        backgroundColor: '#F1F5F9',
    },

    // Stat cards
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statCard: {
        width: '31.5%',
        borderRadius: 18,
        paddingVertical: 18,
        paddingHorizontal: 14,
    },
    statIcon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        marginBottom: 14,
    },
    statValue: {
        fontSize: 16,
        fontWeight: '800',
    },
    statLabel: {
        fontSize: 11,
        color: '#4B5563',
        marginTop: 2,
        fontWeight: '500',
    },

    // Banner carousel
    bannerScroll: {
        paddingRight: 20,
    },
    bannerCard: {
        width: width - 40,
        height: 110,
        borderRadius: CARD_RADIUS,
        padding: 20,
        marginRight: 12,
        justifyContent: 'center',
    },
    bannerTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    bannerSubtitle: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.85)',
        marginTop: 4,
    },
});





import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl, ScrollView } from "react-native";

import { Stack, useRouter,useSearchParams } from "expo-router";
import { useCallback, useState,  } from "react";

// Local Import
import { Company, JobTabs, JobAbout, JobFooter, ScreenHeaderBtn, Specifics } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const tabs = ["About", "Qualification", "Responsibilities"]

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const {data,isLoading, refetch, error } = useFetch('job-details', {
        job_id: params.id
    })

    const [refreshing,setRefreshing] = useState(false)
    const [activeTab,setActiveTab] = useState(tabs[0])
    const onRefresh = () => {};

  return (
    <SafeAreaView
    style={{flex: 1, backgroundColor: COLORS.lightWhite}}
    >
      <Stack.Screen
      options={{
        headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitle: '',
        headerLeft: () => (
          <ScreenHeaderBtn
          iconUrl={icons.left}
          dimension="60%"
          handlePress={()=> router.back()}
          >
          </ScreenHeaderBtn>
        ),
        headerRight: () => (
          <ScreenHeaderBtn
          iconUrl={icons.share}
          dimension="60%"
          >
          </ScreenHeaderBtn>
        )
      }}
      />

      <>
      <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {isLoading? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error? (
          <Text>Something went wrong</Text>
        ) : data.length === 0? (
          <Text>No data found</Text>
        ) : (
          <View
          style={{padding: SIZES.medium, paddingBottom: 100}}
          >
            <Company 
            companyLogo={data[0].employer_logo}
            jobTitle={data[0].job_title}
            companyName={data[0].employer_name}
            location={data[0].job_country}
            />
            <JobTabs 
            tabs={tabs}
            activeTab = {activeTab}
            setActiveTab = {setActiveTab}
            />
          </View>
        )}
      </ScrollView>
      </>
    </SafeAreaView>

    // Safe area view is very powerful tag
  )
}

export default JobDetails
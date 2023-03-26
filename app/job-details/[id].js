import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl, ScrollView } from "react-native";

import { Stack, useRouter,useSearchParams } from "expo-router";
import { useCallback, useState,  } from "react";

// Local Import
import { Company, JobTabs, JobAbout, JobFooter, ScreenHeaderBtn, Specifics } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const {data,isLoading, refetch, error } = useFetch('job-details', {
        job_id: params.id
    })

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
      >

      </Stack.Screen>
    </SafeAreaView>
  )
}

export default JobDetails
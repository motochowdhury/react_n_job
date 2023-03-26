import { Text, View, SafeAreaView, ActivityIndicator, RefreshControl, ScrollView } from "react-native";

import { Stack, useRouter,useSearchParams } from "expo-router";
import { useCallback, useState,  } from "react";

// Local Import
import { Company, JobTabs, JobAbout, JobFooter, ScreenHeaderBtn, Specifics } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
  return (
    <Text>Hey this is Route</Text>
  )
}

export default JobDetails
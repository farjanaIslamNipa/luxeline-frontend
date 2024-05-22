import {useRouter} from "next/navigation";

const useCategoryNavigation = () => {
  const router = useRouter();

  const goToCategory = (category: string) => {
    router.push(`/mens-clothing?category=${category}`);
  };

  return { goToCategory };
};

export default useCategoryNavigation;
import Header from '@/components/shared/Header';
import { transformationTypes } from '@/constants';
import TransformationForm from '@/components/shared/TransformationForm'; // Adjust the import path as needed

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
      <TransformationForm /> {/* Add the TransformationForm here */}
    </>
  );
};

export default AddTransformationTypePage;
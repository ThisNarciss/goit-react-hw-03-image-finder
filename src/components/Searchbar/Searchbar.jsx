import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  SearchBarBox,
  Form,
  Field,
  FormBtn,
  BtnLabel,
} from './Searchbar.styled';

const schema = Yup.object().shape({
  search: Yup.string()
    .trim()
    .min(1, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

const initialValue = {
  search: '',
};

export function Searchbar({ onSubmit }) {
  const handleFormSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  return (
    <SearchBarBox>
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <FormBtn type="submit">
            <BtnLabel>Search</BtnLabel>
          </FormBtn>

          <Field
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </SearchBarBox>
  );
}

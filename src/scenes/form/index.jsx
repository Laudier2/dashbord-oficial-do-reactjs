import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import api from "../../api/api";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const [price, setPrice] = useState("")
  const [size, setSize] = useState("")
  const [quantity, setQuantity] = useState("")
  const [description, setDescription] = useState("")
  const [barcode, setBarcode] = useState("")
  const [category, setCategory] = useState("")
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")
  const [image4, setImage4] = useState("")
  const [image5, setImage5] = useState("")
  const [color1, setColor1] = useState("")
  const [color2, setColor2] = useState("")
  const [color3, setColor3] = useState("")
  const [color4, setColor4] = useState("")
  const [color5, setColor5] = useState("")

  console.log(category)

  const handleFormSubmit = async (values) => {
    values.preventDefault()

    const CreteUser = [{
      name: name,
      slug: slug,
      price: price,
      size: size,
      quantity: quantity,
      description: description,
      bar_code: barcode,
      image: [image1, image2, image3, image4, image5],
      color: [color1, color2, color3, color4, color5]
    }]

    await api.post("/product", CreteUser[0]).then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })

    //console.log(CreteUser[0])
    
  };

  return (
    <Box m="20px">
      <Header title="CRIAR UM PRODUTO" subtitle="Crie um novo perfil de usuário" />

          <form onSubmit={handleFormSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nome"
                
                onChange={(e) => setName(e.target.value)} 
                name="Nome"
                
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Category"
                
                onChange={(e) => setCategory(e.target.value)} 
                name="Category"
                
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Bar-code"
                
                onChange={(e) => setBarcode(e.target.value)} 
                name="Bar-code"
                
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                
                onChange={(e) => setPrice(e.target.value)} 
                name="Price"
                
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Size"
                
                onChange={(e) => setSize(e.target.value)} 
                name="Aize"
                
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="quantity"
                
                onChange={(e) => setQuantity(e.target.value)} 
                name="Quantity"
                
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                
                onChange={(e) => setDescription(e.target.value)} 
                name="Description"
                
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Slug"
                
                onChange={(e) => setSlug(e.target.value)} 
               
                name="Slug"
                
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Image 1"
                
                onChange={(e) => setImage1(e.target.value)}
                
                name="Image 1"
                
                
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="image 2"
                
                onChange={(e) => setImage2(e.target.value)} 
               
                name="image 2"
                
                
                sx={{ gridColumn: "span 1" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="image 2"
                
                onChange={(e) => setImage3(e.target.value)} 
               
                name="image 3"
                
                
                sx={{ gridColumn: "span 1" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="image 4"
                
                onChange={(e) => setImage4(e.target.value)} 
               
                name="image 4"
                
                
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="image 5"
                
                onChange={(e) => setImage5(e.target.value)} 
               
                name="image 5"
                
                
                sx={{ gridColumn: "span 1" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color 1"
                
                onChange={(e) => setColor1(e.target.value)} 
               
                name="Color 1"
                
                
                sx={{ gridColumn: "span 1" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color 2"
                
                onChange={(e) => setColor2(e.target.value)} 
               
                name="Color 2"
                
                
                sx={{ gridColumn: "span 1" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color 3"
                
                onChange={(e) => setColor3(e.target.value)} 
               
                name="Color 3"
                
                
                sx={{ gridColumn: "span 1" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color 4"
                
                onChange={(e) => setColor4(e.target.value)} 
               
                name="Color 4"
                
                
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color 5"
                onChange={(e) => setColor5(e.target.value)}                
                name="Color 5"
                sx={{ gridColumn: "span 1" }}
              />
              {/*<TextField
                fullWidth
                variant="filled"
                type="text"
                label="Endereço 2"
                
                onChange={(e) => setImage1}
                value={values.address2}
                name="Endereço2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />*/}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
    </Box>
  );
};
/*
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};*/

export default Form;

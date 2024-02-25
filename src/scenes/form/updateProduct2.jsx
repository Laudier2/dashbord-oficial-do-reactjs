import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from 'react-toastify';
import { UlLista } from "./styles";
import { MdDeleteForever } from "react-icons/md";

const dataProducts = {
  name: "",
  price: "",
  slug: "",
  quantity: "",
  bar_code: "",
  description: "",
  url_product: "",
  size: "",
  color: "",
  image: "",
}

const FormUpdate = () => {

  const [data, setData] = useState(dataProducts);
  const [product, setProduct] = useState([]);

  /*const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };*/

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const onChange = (ev) => {
    const { name, value } = ev.target;

    //console.log(ev)

    setData({ ...data, [name]: value });
  };
  

  //console.log(data)

  useEffect(() => {
    (async() => {
      const req = await api.get("/product")
      const res = await req.data
      //console.log(res.data)
      setProduct(res)
    })()
  },[])

  //console.log(product)

  const handleDelete = async (values) => {
    values.preventDefault()

    //console.log(values)

    await api.delete(`/product/${values}`).then((res) => {
      toast.success(`O produto foi deletado com sucesso!`)
      //window.location.reload()
      //console.log(res.data.id, categoryid.id)
    })
    .catch((error) => {
      toast.error(`Houve um erro ao cadastra o produto, referente a: ${error}`)
      console.log(error)
    })
  
    //console.log(CreteUser[0])
    
  }; 

  const handleFormSubmit = async (values) => {
    values.preventDefault()

    /*await api.put("/product", data).then((res) => {
      toast.success(`O produto foi atualizado com sucesso!`)
      setTimeout(() => {
        //window.location.reload()
      },3000)
      //console.log(res.data.id, categoryid.id)
    })
    .catch((error) => {
      toast.error(`Houve um erro ao cadastra o produto, referente a: ${error}`)
      console.log(error)
    })*/
  
    //console.log(data)
    
  };


  return (
    <>
    
    <Box m="20px">
      <Header title="ATUALIZE UM PRODUTO" subtitle="Atualize um produto aqui" />
      <UlLista>
        {
          product.map(pro => {

            const { id, image, name, price } = pro
            
            return (
              <div className='listagem' key={id}>
                <button onClick={() => setData(pro)}>
                  <img src={image[0]} alt="img" className="" />
                  <p>{name}</p>
                </button>
                  <h4>$R {price},00 <MdDeleteForever className="dellIcon" onClick={() => handleDelete(id)}/></h4>
                <br />
              </div>
            )
          })
        }
        <br /><br /><br />
      </UlLista>
        
        <UlLista>
        </UlLista>
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
                name="name"
                value={data.name}
                onChange={onChange} 
                sx={{ gridColumn: "span 2" }}
              />
          
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Bar-code"
                name="bar_code"
                value={data.bar_code}
                onChange={onChange} 
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                name="price"
                value={data.price}
                onChange={onChange} 
                sx={{ gridColumn: "span 2" }}
                />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Size"
                name="size"
                value={data.size}
                onChange={onChange} 
                sx={{ gridColumn: "span 2" }}
                />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="quantity"
                name="quantity"
                value={data.quantity}
                onChange={onChange} 
                sx={{ gridColumn: "span 2" }}
                />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                name="description"
                value={data.description}
                onChange={onChange} 
                sx={{ gridColumn: "span 2" }}
                />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Slug"
                name="slug"
                value={data.slug}
                onChange={onChange}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Image1"
                value={data.image}
                onChange={onChange} 
                name="image"
                sx={{ gridColumn: "span 1" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color1"
                name="color"
                value={data.color}
                onChange={onChange} 
                sx={{ gridColumn: "span 1" }}
                />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="URL do Produto"
                name="urlproduct"
                value={data.url_product}
                onChange={onChange}                
                sx={{ gridColumn: "span 3" }}
              />
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Atualiza Produto
              </Button>
            </Box>
          </form>
    </Box>
  </>
  );
};

export default FormUpdate;

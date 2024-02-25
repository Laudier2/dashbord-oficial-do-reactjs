import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from 'react-toastify';
import { UlLista } from "./styles";
/*import ImageUploading from 'react-images-uploading';
import { ImCloudUpload } from "react-icons/im";*/

const Form = () => {

  /*const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };*/

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [name, setName] = useState("")
  const [slug0, setSlug0] = useState("")
  const [slug1, setSlug1] = useState("")
  const [slug2, setSlug2] = useState("")
  const [slug3, setSlug3] = useState("")
  const [slug4, setSlug4] = useState("")
  const [slug5, setSlug5] = useState("")
  const [price, setPrice] = useState("")
  const [size0, setSize0] = useState("")
  const [size1, setSize1] = useState("")
  const [size2, setSize2] = useState("")
  const [size3, setSize3] = useState("")
  const [size4, setSize4] = useState("")
  const [size5, setSize5] = useState("")
  const [quantity, setQuantity] = useState("")
  const [description, setDescription] = useState("")
  const [barcode, setBarcode] = useState("")
  const [category, setCategory] = useState([])
  const [categoryid, setCategoryid] = useState([])
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
  const [urlProduct, setUrlproduct] = useState("")

  //stete comentarios
  const [imgName, setImgName] = useState("")
  const [nameUser, setNameUser] = useState("")
  const [imageUser0, setImageUser0] = useState("")
  const [imageUser1, setImageUser1] = useState("")
  const [imageUser2, setImageUser2] = useState("")
  const [imageUser3, setImageUser3] = useState("")
  const [msgUser, setMessage] = useState("")
  const [estrela, setEstrela] = useState("")

  

  console.log(categoryid.id)

  useEffect(() => {
    (async() => {
      const req = await api.get("/category")
      const res = await req.data
      //console.log(res.data)
      setCategory(res)
    })()
  },[])

  const handleFormSubmit = async (values) => {
    values.preventDefault()

    const CreateUser = {
      name: name,
      slug: [
        slug0, 
        slug1, 
        slug2, 
        slug3, 
        slug4, 
        slug5
      ], 
      price: price,
      size: [
        size0, 
        size1, 
        size2, 
        size3, 
        size4, 
        size5
      ],
      quantity: quantity,
      description: description,
      bar_code: barcode,
      url_product: urlProduct,
      image: [image1, image2, image3, image4, image5],
      color: [color1, color2, color3, color4, color5]
    }

    const Comentario = {
      imgName: imgName,
      name: nameUser,
      image: [imageUser0, imageUser1, imageUser2, imageUser3],
      message: msgUser,
      estrela: estrela      

    }

    await api.post("/product", CreateUser).then((res) => {
      toast.success(`O produto ${CreateUser.name} foi criado com sucesso!`)
      //console.log(res.data.id, categoryid.id)

      setTimeout(async() => {
        const dataRelations = {
          id_category: `${categoryid.id}`,
          id_product: `${res.data.id}`
        }

        console.log(dataRelations)
    
        await api.post("/categorypr", dataRelations).then((catego) => {
          
          console.log(catego.data)
        })
        .catch((error) => {
          toast.error(`Houve um erro ao criar o relacionamento: ${error}`)
          console.log(error)
        })

        await api.post("/comentario", Comentario).then((response) => {

          const dataRelations2 = {
            id_comentario: `${response.data.comentario.id}`,
            id_product: `${res.data.id}`
          }

          //console.log(dataRelations)
      
          api.post("/comentariorelation", dataRelations2).then((catego) => {
            toast.success(`O relacionamento foi feito!`)
          })
        })
      }, 5000);
      
    })

    //toast.success(`O comentario foi criado com sucesso!`)
    //console.log(res.data.id, categoryid.id)

  };

  /*const handleImages = () => {

    const req = JSON.stringify(images)
    localStorage.setItem("img", req)
    
  }*/

  const img = localStorage.getItem("img")
  const imgArray = JSON.parse(img)
  const res = img ? imgArray.map(e => e.data_url) : ""

  //console.log(images)
  //console.log(image1)

  return (
    <>
    <Box m="20px">
      <Header title="CRIAR UM PRODUTO" subtitle="Crie um novo perfil de usuário" />
      <div style={{width: 180}}>
        {categoryid ? 
        <ul>
          <li style={{margin: 10, border: "solid 1px", padding: 10, fontSize: "2.rem", listStyleType: "none", height: 132}}>
            <img src={categoryid.image} alt="img" style={{width: 100, height: 90}}/>
            <h5 style={{fontSize: 20, marginTop: -4}}>{categoryid.name}</h5>
          </li> 
        </ul> : ""
        }
      </div>
        <UlLista>
          <ul>
            {category.map(res => {

              const {id, image, name } = res
                return (
                  <>                
                    <li key={id} onClick={() => setCategoryid(res)}>
                      <img src={image} alt="img" />
                      <h5>{name}</h5>
                    </li>
                  </>
                )
            })}
          </ul>
          {/*<ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="container col-md-3 mt-5">
                    <button
                      className='btn btn-primary p-3 h5'
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                    <div>
                      <ImCloudUpload style={{width: 80, height: 80, cursor: "pointer"}}/>
                    </div>
                    </button>
                    <button style={{width: 80, fontSize: 15, fontWeight: "bold", background: "green", cursor: "pointer"}} onClick={() => handleImages()}>
                        Guarda imagens
                      </button>
                    &nbsp;
                    {imageList.map((image, index) => (
                      <div style={{display: "inline-block", margin: 5}}>
                        <div key={index} >
                          <img src={image['data_url']} alt="" width="160" height="100"/>
                        </div>
                        
                        <div className="container col-7 mt-2">
                        <button style={{width: 160, fontSize: 15, fontWeight: "bold"}} onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>*/}
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
                
                onChange={(e) => setName(e.target.value)} 
                name="Nome"
                
                
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
                label="Size 0"
                
                onChange={(e) => setSize0(e.target.value)} 
                name="Aize"
                
                
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Size 1"
                
                onChange={(e) => setSize1(e.target.value)} 
                name="Aize"
                
                
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Size 2"
                
                onChange={(e) => setSize2(e.target.value)} 
                name="Aize"
                
                
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Size 3"
                
                onChange={(e) => setSize3(e.target.value)} 
                name="Aize"
                
                
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Size 4"
                
                onChange={(e) => setSize4(e.target.value)} 
                name="Aize"
                
                
                sx={{ gridColumn: "span 2" }}
                />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Size 5"
                
                onChange={(e) => setSize5(e.target.value)} 
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
                label="Slug0"
                
                onChange={(e) => setSlug0(e.target.value)} 
               
                name="Slug"
                
                
                sx={{ gridColumn: "span 1" }}
                />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Slug1"
                
                onChange={(e) => setSlug1(e.target.value)} 
               
                name="Slug"
                
                
                sx={{ gridColumn: "span 1" }}
                /><TextField
                fullWidth
                variant="filled"
                type="text"
                label="Slug2"
                
                onChange={(e) => setSlug2(e.target.value)} 
               
                name="Slug"
                
                
                sx={{ gridColumn: "span 1" }}
                /><TextField
                fullWidth
                variant="filled"
                type="text"
                label="Slug3"
                
                onChange={(e) => setSlug3(e.target.value)} 
               
                name="Slug"
                
                
                sx={{ gridColumn: "span 1" }}
                /><TextField
                fullWidth
                variant="filled"
                type="text"
                label="Slug4"
                
                onChange={(e) => setSlug4(e.target.value)} 
               
                name="Slug"
                
                
                sx={{ gridColumn: "span 1" }}
                /><TextField
                fullWidth
                variant="filled"
                type="text"
                label="Slug5"
                
                onChange={(e) => setSlug5(e.target.value)} 
               
                name="Slug"
                
                
                sx={{ gridColumn: "span 1" }}
                />
                
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Image 1"
                
                onChange={(e) => setImage1(e ? e.target.value : res[0])}
                
                name="Image 1"
                
                
                sx={{ gridColumn: "span 1" }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="image 2"
                
                onChange={(e) => setImage2(e ? e.target.value : res[1])}
                
                name="image 2"
                
                
                sx={{ gridColumn: "span 1" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="image 2"
                
                onChange={(e) => setImage3(e ? e.target.value : res[2])} 
                
                name="image 3"
                
                
                sx={{ gridColumn: "span 1" }}
                />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="image 4"
                
                onChange={(e) => setImage4(e ? e.target.value : res[3])}
               
                name="image 4"
                
                
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="image 5"
                
                onChange={(e) => setImage5(e ? e.target.value : res[4])}
               
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
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="URL do Produto"
                onChange={(e) => setUrlproduct(e.target.value)}                
                name="url_product"
                sx={{ gridColumn: "span 3" }}
              />
            </Box>
            <br />
            <h2>Avaliação e comentarios</h2>
            <hr />
            <br />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image Users"
              onChange={(e) => setImgName(e.target.value)}                
              name="imgName"
              sx={{ gridColumn: "span 3" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Name User"
              onChange={(e) => setNameUser(e.target.value)}                
              name="name"
              sx={{ gridColumn: "span 3" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image0"
              onChange={(e) => setImageUser0(e.target.value)}                
              name="image0"
              sx={{ gridColumn: "span 3" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image1"
              onChange={(e) => setImageUser1(e.target.value)}                
              name="image1"
              sx={{ gridColumn: "span 3" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image2"
              onChange={(e) => setImageUser2(e.target.value)}                
              name="image2"
              sx={{ gridColumn: "span 3" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image3"
              onChange={(e) => setImageUser3(e.target.value)}                
              name="image3"
              sx={{ gridColumn: "span 3" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Message"
              onChange={(e) => setMessage(e.target.value)}                
              name="message"
              sx={{ gridColumn: "span 3" }}
            />
             <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Estrela"
              onChange={(e) => setEstrela(e.target.value)}                
              name="estrela"
              sx={{ gridColumn: "span 3" }}
            />
            <Box>

            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Criar Produto
              </Button>
            </Box>
          </form>
    </Box>
  </>
  );
};

export default Form;

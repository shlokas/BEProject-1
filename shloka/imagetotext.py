# import Image from tesseract 
# import image_to_string
# print(image_to_string(Image.open('test_tess.png')))
# print(image_to_string(Image.open('test_tess.jpg'), lang='eng'))

from PIL import Image
import pytesseract

text = pytesseract.image_to_string(Image.open("hours.png"))
print(text)
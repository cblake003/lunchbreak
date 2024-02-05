from django.test import TestCase
from django.urls import reverse
from .models import Food
from django.contrib.auth.models import User 
from rest_framework.test import APIClient
from rest_framework import status


# Create your tests here.

# class FoodModelTest(TestCase): 
#     def setUp(self): 
#         Food.objects.create(title='risotto', description='italian', completed=False)
#         Food.objects.create(title='pho', description='vietnamese', completed=True)

#     def test_food_content(self):
#         risotto = Food.objects.get(title='risotto')
#         pho = Food.objects.get(title='pho')
#         self.assertEqual(risotto.description, 'italian')
#         self.assertEqual(pho.completed, True)

# class AuthTests(TestCase):
#     @classmethod
#     def setUpTestData(cls):
#         # Create a user for testing login
#         cls.test_user = User.objects.create_user(username='testuser', password='testpassword123')

#     def test_login_view_sets_httponly_cookies(self):
#         response = self.client.post(reverse('token_obtain_pair'), {'username': 'testuser', 'password': 'testpassword123'}, secure=True)
#         self.assertTrue(response.cookies.get('access_token').value)
#         self.assertTrue(response.cookies['access_token']['httponly'])
#         self.assertTrue(response.cookies.get('refresh_token').value)
#         self.assertTrue(response.cookies['refresh_token']['httponly'])


#     def test_logout_view_clears_cookies(self):
#         # Log in to set the cookies
#         self.client.login(username='testuser', password='testpassword123')
#         # Then, log out
#         response = self.client.post(reverse('logout'), secure=True)
#         self.assertFalse(response.cookies.get('access_token').value)
#         self.assertFalse(response.cookies.get('refresh_token').value)
        
#     def test_refresh_token_view(self):
#         # Log in to set the refresh token cookie
#         login_response = self.client.post(reverse('token_obtain_pair'), {'username': 'testuser', 'password': 'testpassword123'}, secure=True)
#         # Verify that the refresh token cookie is set
#         self.assertIn('refresh_token', login_response.cookies)
#         self.assertTrue(login_response.cookies['refresh_token'].value)

#         # Attempt to refresh the token using the refresh token endpoint
#         # Note: Since the test client automatically uses cookies stored from previous responses,
#         # the refresh token cookie will be included in this request.
#         refresh_response = self.client.post(reverse('token_refresh'), secure=True)
        
#         # Verify that a new access token is provided in the response cookies
#         self.assertIn('access_token', refresh_response.cookies)
#         self.assertTrue(refresh_response.cookies['access_token']['httponly'])

#         # Check if the access token cookie is correctly set
#         self.assertIsNotNone(refresh_response.cookies.get('access_token').value)

# class CsrfProtectionTest(TestCase):
#     def test_post_without_csrf_token(self):
#         # Define the URL for the view you want to test. Replace 'your_view_name' with the actual name.
#         url = reverse('token_obtain_pair')
        
#         # Make a POST request without a CSRF token.
#         response = self.client.post(url, {'some_field': 'some_value'}, secure=True)
        
#         # Check if the response status code is 403 Forbidden, which indicates CSRF protection worked.
#         self.assertEqual(response.status_code, 403, "CSRF protection did not prevent the request.")


class CustomTokenObtainPairViewTest(TestCase):
    def setUp(self):
        self.client = APIClient(enforce_csrf_checks=True)  # Ensure CSRF checks are enforced
        self.login_url = reverse('token_obtain_pair')  # Adjust with your actual URL name
        self.user_credentials = {
            'username': 'testuser',
            'password': 'testpassword123'
        }
        # Create a test user here if your login view requires actual user credentials
        # User.objects.create_user(**self.user_credentials)

    def test_login_without_csrf_token(self):
        """
        Ensure we cannot log in without a CSRF token, expecting a 403 response.
        """
        response = self.client.post(self.login_url, data=self.user_credentials, format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
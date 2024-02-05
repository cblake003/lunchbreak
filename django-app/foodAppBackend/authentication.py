from rest_framework_simplejwt.authentication import JWTAuthentication
from django.middleware.csrf import CsrfViewMiddleware
from rest_framework import exceptions
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.tokens import UntypedToken
from django.utils.translation import gettext_lazy as _

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        # Directly specify the cookie names
        raw_token = request.COOKIES.get('access_token')  # Use the actual cookie name you set for access tokens
        if not raw_token:
            return None
        try:
            # This assumes you've set your tokens in cookies named 'access_token' and 'refresh_token'
            validated_token = self.get_validated_token(raw_token)
            return self.get_user(validated_token), validated_token
        except TokenError as e:
            raise exceptions.AuthenticationFailed('Invalid token') from e


# class CookieJWTAuthentication(JWTAuthentication):
#     def authenticate(self, request):
#         # Directly specify the cookie names
#         raw_token = request.COOKIES.get('access_token')  # Use the actual cookie name you set for access tokens
#         if not raw_token:
#             return None

#         try:
#             # Validate the JWT token from the cookie
#             validated_token = self.get_validated_token(raw_token)
#             user = self.get_user(validated_token)

#             # Perform CSRF check after successful JWT validation
#             self.enforce_csrf(request)
            
#             return user, validated_token
#         except TokenError as e:
#             raise exceptions.AuthenticationFailed(_('Invalid token')) from e

#     def enforce_csrf(self, request):
#         """
#         Enforce CSRF validation.
#         """
#         # Use Django's CsrfViewMiddleware to perform the check
#         reason = CsrfViewMiddleware().process_view(request, None, (), {})
#         if reason:
#             # CsrfViewMiddleware.process_view returns a reason for failure, raise an exception if so
#             raise exceptions.PermissionDenied(_('CSRF Failed: %s') % reason)
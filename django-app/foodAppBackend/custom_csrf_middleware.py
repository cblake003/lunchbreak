# from django.utils.deprecation import MiddlewareMixin
# from django.middleware.csrf import CsrfViewMiddleware

# class CustomCsrfMiddleware(MiddlewareMixin):
#     def __init__(self, get_response):
#         super().__init__(get_response)
#         self.csrf_middleware = CsrfViewMiddleware(get_response)
    
#     def process_view(self, request, view_func, view_args, view_kwargs):
#         # Your custom logic for when to bypass CSRF checks
#         # For example, bypass CSRF check for API endpoints starting with '/api/'
#         # if request.path.startswith('/api/csrf'):
#         #     # Assuming API requests handle CSRF differently or it's a trusted source
#         #     # You could also add more conditions here, like checking for a custom header
#         #     return None  # Skip CSRF check for this request

#         # For all other requests, use Django's standard CSRF checks
#         return self.csrf_middleware.process_view(request, view_func, view_args, view_kwargs)

#     # Note: Depending on your custom logic, you might need to override other methods
#     # such as process_request or process_response. This example focuses on process_view.


from django.utils.deprecation import MiddlewareMixin
from django.middleware.csrf import CsrfViewMiddleware

class CustomCsrfMiddleware(MiddlewareMixin):
    def process_view(self, request, view_func, view_args, view_kwargs):
        # Check if the request method requires CSRF protection
        if request.method not in ('GET', 'HEAD', 'OPTIONS', 'TRACE'):
            # Initialize the default Django CSRF middleware
            csrf_middleware = CsrfViewMiddleware()
            
            # Call process_view of CsrfViewMiddleware to perform the check
            return csrf_middleware.process_view(request, view_func, view_args, view_kwargs)
        # For safe methods, no need to check CSRF
        return None
